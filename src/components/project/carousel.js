import React  from  'react';
import Carousel  from  'semantic-ui-carousel-react';
import AnchoredCard from './anchoredCard';
import PTCard from './ptbotCard'
import { css } from '@emotion/core'

// Carousel container 
const container = css`
  background: black;
`


const Container = ({className}) => {
	let  elements  = [
		{
			render:()=>{
				return <AnchoredCard />
			}
		},
		{
			render:()=>{
				return <PTCard />
			}
	    },
	];
	
	return (
			<Carousel
			css={container}
			elements  =  {  elements  }
			animation  ='slide left'
			showNextPrev  =  {true}
			/>
	)

}
export  default  Container;