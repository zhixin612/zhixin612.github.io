require "exifr/jpeg"

module Jekyll
  class PhotographyGenerator < Generator
    safe true
    priority :low

    def generate(site)
      photo_dir = File.join(site.source, "assets", "img", "photography")
      return unless File.directory?(photo_dir)

      extensions = %w[.jpg .jpeg .png .JPG .JPEG .PNG]
      photos = []

      Dir.glob(File.join(photo_dir, "*")).each do |file|
        next unless extensions.include?(File.extname(file))

        photo = build_photo_data(file, site)
        photos << photo if photo
      end

      photos.sort_by! { |p| p["date"] || "" }.reverse!

      site.data["photography"] = photos
    end

    private

    def build_photo_data(file, site)
      relative_path = Pathname.new(file).relative_path_from(Pathname.new(site.source)).to_s
      width, height = read_dimensions(file)
      return nil unless width && height

      date = read_exif_date(file) || File.mtime(file).strftime("%Y-%m-%d")

      {
        "src" => relative_path,
        "width" => width,
        "height" => height,
        "date" => date,
        "alt" => File.basename(file, File.extname(file)).gsub(/[-_]/, " "),
      }
    end

    def read_dimensions(file)
      ext = File.extname(file).downcase
      if ext == ".jpg" || ext == ".jpeg"
        begin
          exif = EXIFR::JPEG.new(file)
          return [exif.width, exif.height] if exif.width && exif.height
        rescue StandardError
          # fall through to identify
        end
      end

      # Fallback to ImageMagick identify
      output = `identify -format "%w %h" "#{file}" 2>/dev/null`.strip
      parts = output.split(" ")
      if parts.length >= 2
        [parts[0].to_i, parts[1].to_i]
      end
    end

    def read_exif_date(file)
      ext = File.extname(file).downcase
      return nil unless ext == ".jpg" || ext == ".jpeg"

      begin
        exif = EXIFR::JPEG.new(file)
        if exif.date_time_original
          exif.date_time_original.strftime("%Y-%m-%d")
        elsif exif.date_time
          exif.date_time.strftime("%Y-%m-%d")
        end
      rescue StandardError
        nil
      end
    end
  end
end
