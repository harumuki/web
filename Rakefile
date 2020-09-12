
task :default => ["node_modules", :fonts]

directory "node_modules" do
  `npm i`
end

font_source_files = Rake::FileList.new("content/fonts/CascadiaCode-2007.01.woff2", "content/fonts/SourceSansVariable-Italic.3.006R.woff2", "content/fonts/SourceSansVariable-Roman.3.006R.woff2")

def font_layout_features 
  "kern,liga,calt,rvrn,locl,onum,pnum,smcp,c2sc,lnum,tnum,subs,sups,dlig,salt,zero"
end

font_ranges = {
  "latin" => "U+0000-00FF",
  "latin-ext-a" => "U+0100-017F,",
  "latin-ext-b" => "U+0180-024F",
  "latin-rest" => "U+0259-03C0,U+1E00-1EFF,U+2000-FB02",
  "greek" => "U+0370-03FF",
  "greek-ext" => "U+1F00-1FFF"
}

font_output_files = []

def subset(input, output, range)
  cmd = "pyftsubset #{input} --output-file=#{output} --unicodes=\"#{range}\" --flavor=woff2 --layout-features=\"#{font_layout_features}\""
  puts cmd
  `#{cmd}`
end

font_source_files.each do |input| 
  font_ranges.keys.each do |key|
    output = "content/fonts/#{File.basename(input).sub(".woff2", ".#{key}.woff2")}"
    font_output_files << output
    file output => input do 
      subset(input, output, font_ranges[key])
    end
  end  
end

task :fonts => font_output_files