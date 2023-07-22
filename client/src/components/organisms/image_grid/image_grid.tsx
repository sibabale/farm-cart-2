
import Badge from '../../atoms/badge/badge';
import {Grid, GridContainer, MobileImage} from './image_grid.styles';

type ImageGridProps = {
  images: string[]
}
export const ImageGrid = ({images}: ImageGridProps) => {  
  return(
    <>
      <MobileImage>
        <img src={images[0]} alt="cow"/>
        <Badge text="1/4"/>
      </MobileImage>
      <GridContainer>
        <Grid>
          <div style={{backgroundImage: `url(${images[0]})`}} className='item1' />
          <div style={{backgroundImage: `url(${images[1]})`}} className='item2' />
          <div style={{backgroundImage: `url(${images[2]})`}} className='item3' />
          <div style={{backgroundImage: `url(${images[3]})`}} className='item4' />
          <div style={{backgroundImage: `url(${images[4]})`}} className='item5' /> 
        </Grid>
      </GridContainer>
    </>
  )
}

export default ImageGrid;