import React  from  'react';
import Carousel  from  'semantic-ui-carousel-react';
import AnchoredCard from './anchoredCard';
import PTCard from './ptbotCard'

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
			elements  =  {  elements  }
			animation  ='slide left'
			showNextPrev  =  {true}
			/>
	)

}
export  default  Container;