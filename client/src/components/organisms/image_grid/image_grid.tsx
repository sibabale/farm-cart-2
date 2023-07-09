
import Badge from '../../atoms/badge/badge';
import {Grid, SeeAll,GridContainer, MobileImage} from './image_grid.styles';

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
        <div style={{backgroundImage: 'url(../images/cows/cow-0.jpeg)'}} className='item1' />
        <div style={{backgroundImage: 'url(../images/cows/cow-0.jpeg)'}} className='item2' />
        <div style={{backgroundImage: 'url(../images/cows/cow-0.jpeg)'}} className='item2' />
        <div style={{backgroundImage: 'url(../images/cows/cow-0.jpeg)'}} className='item3' />
        <div style={{backgroundImage: 'url(../images/cows/cow-0.jpeg)'}} className='item4' />
        <div className='item5' style={{backgroundImage: 'url(../images/cows/cow-0.jpeg)'}} > 
          <SeeAll>See All Photos</SeeAll>
        </div>
      </Grid>
    </GridContainer>
    </>
  )
}

export default ImageGrid;