const formats = [
  {
    ext: '.text',
    name: 'Plain Text',
    mime: 'text/plain',
  },
  {
    ext: '.aac',
    name: 'AAC audio',
    mime: 'audio/aac',
  },
  {
    ext: '.abw',
    name: 'AbiWord document',
    mime: 'application/x-abiword',
  },
  {
    ext: '.arc',
    name: 'Archive document (multiple files embedded)',
    mime: 'application/octet-stream',
  },
  {
    ext: '.avi',
    name: 'AVI: Audio Video Interleave',
    mime: 'video/x-msvideo',
  },
  {
    ext: '.azw',
    name: 'Amazon Kindle eBook format',
    mime: 'application/vnd.amazon.ebook',
  },
  {
    ext: '.bin',
    name: 'Any kind of binary data',
    mime: 'application/octet-stream',
  },
  {
    ext: '.bmp',
    name: 'Windows OS/2 Bitmap Graphics',
    mime: 'image/bmp',
    icon: 'photo',
  },
  {
    ext: '.bz',
    name: 'BZip archive',
    mime: 'application/x-bzip',
  },
  {
    ext: '.bz2',
    name: 'BZip2 archive',
    mime: 'application/x-bzip2',
  },
  {
    ext: '.csh',
    name: 'C-Shell script',
    mime: 'application/x-csh',
  },
  {
    ext: '.css',
    name: 'Cascading Style Sheets (CSS)',
    mime: 'text/css',
  },
  {
    ext: '.csv',
    name: 'Comma-separated values (CSV)',
    mime: 'text/csv',
  },
  {
    ext: '.doc',
    name: 'Microsoft Word (2003)',
    mime: 'application/msword',
  },
  {
    ext: '.docx',
    name: 'Microsoft Word',
    mime:
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  },
  {
    ext: '.eot',
    name: 'MS Embedded OpenType fonts',
    mime: 'application/vnd.ms-fontobject',
  },
  {
    ext: '.epub',
    name: 'Electronic publication (EPUB)',
    mime: 'application/epub+zip',
  },
  {
    ext: '.es',
    name: 'ECMAScript Script',
    mime: 'application/ecmascript',
  },
  {
    ext: '.gif',
    name: 'Graphics Interchange Format (GIF)',
    mime: 'image/gif',
    icon: 'photo',
  },
  {
    ext: '.htm\n.html',
    name: 'HyperText Markup Language (HTML)',
    mime: 'text/html',
  },
  {
    ext: '.ico',
    name: 'Icon format',
    mime: 'image/x-icon',
    icon: 'photo',
  },
  {
    ext: '.ics',
    name: 'iCalendar format',
    mime: 'text/calendar',
  },
  {
    ext: '.jar',
    name: 'Java Archive (JAR)',
    mime: 'application/java-archive',
  },
  {
    ext: '.jpeg',
    name: 'JPEG Image',
    mime: 'image/jpeg',
    icon: 'photo',
  },
  {
    ext: '.jpg',
    name: 'JPEG Image',
    mime: 'image/jpeg',
    icon: 'photo',
  },
  {
    ext: '.js',
    name: 'JavaScript Script',
    mime: 'application/javascript',
  },
  {
    ext: '.json',
    name: 'JSON format',
    mime: 'application/json',
  },
  {
    ext: '.mid',
    name: 'Musical Instrument Digital Interface (MIDI)',
    mime: 'audio/x-midi',
  },
  {
    ext: '.midi',
    name: 'Musical Instrument Digital Interface (MIDI)',
    mime: 'audio/midi',
  },
  {
    ext: '.mpeg',
    name: 'MPEG Video',
    mime: 'video/mpeg',
  },
  {
    ext: '.mpkg',
    name: 'Apple Installer Package',
    mime: 'application/vnd.apple.installer+xml',
  },
  {
    ext: '.odp',
    name: 'OpenDocument presentation document',
    mime: 'application/vnd.oasis.opendocument.presentation',
  },
  {
    ext: '.ods',
    name: 'OpenDocument spreadsheet document',
    mime: 'application/vnd.oasis.opendocument.spreadsheet',
  },
  {
    ext: '.odt',
    name: 'OpenDocument text document',
    mime: 'application/vnd.oasis.opendocument.text',
  },
  {
    ext: '.oga',
    name: 'OGG audio',
    mime: 'audio/ogg',
  },
  {
    ext: '.ogv',
    name: 'OGG video',
    mime: 'video/ogg',
  },
  {
    ext: '.ogx',
    name: 'OGG',
    mime: 'application/ogg',
  },
  {
    ext: '.otf',
    name: 'OpenType font',
    mime: 'font/otf',
  },
  {
    ext: '.png',
    name: 'PNG Image',
    mime: 'image/png',
    desc: 'Portable Network Graphics',
    icon: 'photo',
  },
  {
    ext: '.pdf',
    name: 'PDF Document',
    mime: 'application/pdf',
    desc: 'Portable Document Format',
  },
  {
    ext: '.ppt',
    name: 'Microsoft PowerPoint (2003)',
    mime: 'application/vnd.ms-powerpoint',
  },
  {
    ext: '.pptx',
    name: 'Microsoft PowerPoint',
    mime:
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  },
  {
    ext: '.rar',
    name: 'RAR archive',
    mime: 'application/x-rar-compressed',
  },
  {
    ext: '.rtf',
    name: 'Rich Text Format (RTF)',
    mime: 'application/rtf',
  },
  {
    ext: '.sh',
    name: 'Bourne shell script',
    mime: 'application/x-sh',
  },
  {
    ext: '.svg',
    name: 'SVG Image',
    mime: 'image/svg+xml',
    icon: 'photo',
    desc: 'Scalable Vector Graphics',
  },
  {
    ext: '.swf',
    name: 'Small web format (SWF) or Adobe Flash document',
    mime: 'application/x-shockwave-flash',
  },
  {
    ext: '.tar',
    name: 'Tape Archive (TAR)',
    mime: 'application/x-tar',
  },
  {
    ext: '.tif\n.tiff',
    name: 'Tagged Image File Format (TIFF)',
    mime: 'image/tiff',
    icon: 'photo',
  },
  {
    ext: '.ts',
    name: 'Typescript file',
    mime: 'application/typescript',
  },
  {
    ext: '.ttf',
    name: 'TrueType Font',
    mime: 'font/ttf',
  },
  {
    ext: '.vsd',
    name: 'Microsoft Visio',
    mime: 'application/vnd.visio',
  },
  {
    ext: '.wav',
    name: 'Waveform Audio Format',
    mime: 'audio/wav',
  },
  {
    ext: '.weba',
    name: 'WEBM audio',
    mime: 'audio/webm',
  },
  {
    ext: '.webm',
    name: 'WEBM video',
    mime: 'video/webm',
  },
  {
    ext: '.webp',
    name: 'WEBP image',
    mime: 'image/webp',
    icon: 'photo',
  },
  {
    ext: '.woff',
    name: 'Web Open Font Format (WOFF)',
    mime: 'font/woff',
  },
  {
    ext: '.woff2',
    name: 'Web Open Font Format (WOFF)',
    mime: 'font/woff2',
  },
  {
    ext: '.xhtml',
    name: 'XHTML',
    mime: 'application/xhtml+xml',
  },
  {
    ext: '.xls',
    name: 'Microsoft Excel (2003)',
    mime: 'application/vnd.ms-excel',
  },
  {
    ext: '.xlsx',
    name: 'Microsoft Excel',
    mime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  },
  {
    ext: '.xml',
    name: 'XML',
    mime: 'application/xml',
  },
  {
    ext: '.xul',
    name: 'XUL',
    mime: 'application/vnd.mozilla.xul+xml',
  },
  {
    ext: '.zip',
    name: 'ZIP archive',
    mime: 'application/zip',
  },
  {
    ext: '.3gp',
    name: '3GPP Video',
    mime: 'video/3gpp',
  },
  {
    ext: '.3g2',
    name: '3GPP2 Audio File',
    mime: 'video/3gpp2',
  },
  {
    ext: '.7z',
    name: '7-zip archive',
    mime: 'application/x-7z-compressed',
  },
  {
    ext: '.key',
    name: 'Keynote Presentation',
    mime: 'application/x-iwork-keynote-sffkey',
  },
]

export default function getFormatName(mime, name) {
  const ext = name.split('.').pop()
  const format = formats.find(fmt => fmt.mime === mime || fmt.ext === ext) || {}

  return {
    ...format,
    format: format.name || `Unsupported (${mime || ext})`,
    icon: format.icon || 'file',
  }
}
