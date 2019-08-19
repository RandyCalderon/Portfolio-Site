import React  from  'react';
import Carousel  from  'semantic-ui-carousel-react';
import AnchoredCard from './anchoredCard';
import PTCard from './ptbotCard'

const Container = () => {
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
	]
	return (
		<div>
			<Carousel
			elements  =  {  elements  }
			animation  ='slide left'
			showNextPrev  =  {true}
			/>
		</div>
	)

}
export  default  Container;