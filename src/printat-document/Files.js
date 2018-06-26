import React, {Component} from 'react'

const File = ({name, size, type, lastModified, select, remove, i = 0}) => (
  <div onClick={() => select(i)}>
    <ListItem
      leftAvatar={
        <Avatar icon={getIcon(name, type)} backgroundColor={blue500} />
      }
      rightIconButton={
        <IconButton
          onClick={() => remove(i)}
          tooltip="Remove this File"
          tooltipPosition="bottom-left"
          touch
        >
          <ClearIcon />
        </IconButton>
      }
      primaryText={`${name} (#${i})`}
      secondaryText={`${humanFileSize(size)} - ${getFileInfo(
        name,
        type,
      )} - ${lastModified.toLocaleString()}`}
    />
  </div>
)

const NoFiles = () => (
  <ListItem
    leftAvatar={<Avatar icon={<FilesIcon />} backgroundColor={deepOrange500} />}
    rightIcon={<ChartIcon />}
    primaryText={`No Files Yet. Please add one.`}
    secondaryText="No Files have been added yet. Please add one below."
  />
)

export default ({files = [], onUploaded, onProg, onError, ...ops}) => (
  <List>
    <Subheader inset>Files</Subheader>
    <Upload result={onUploaded} progress={onProg} error={onError}>
      <ListItem
        leftAvatar={<Avatar icon={<AddIcon />} backgroundColor={teal500} />}
        rightIcon={<InfoIcon />}
        primaryText={`Upload a File`}
        secondaryText="Upload a file"
      />
    </Upload>
    {files.length > 0 ? (
      <div>
        {files.map((item, i) => <File key={i} i={i} {...ops} {...item} />)}
      </div>
    ) : (
      <Upload result={onUploaded} progress={onProg} error={onError}>
        <NoFiles />
      </Upload>
    )}
  </List>
)
