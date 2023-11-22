import  React,{useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card3Text from '../Card/Card3Text';
import List3Card from '../List/List3Card';


 function Accordion1({Header ,ItemList ,ClickAccordion ,Id}) {
  const [isExpanded, setIsExpanded] = useState('');
  const handleAccordionClick = () => {
    setIsExpanded(isExpanded === Id ? '' : Id);
    ClickAccordion(Id); 
  };
  return (
    <div>
      <Accordion expanded={isExpanded===Id}
        elevation={0}
        disableGutters
       
        sx={{backgroundColor: 'transparent', 
        }}
        >
        <AccordionSummary sx={{backgroundColor:"white"}}
          expandIcon={<ExpandMoreIcon />}  onClick={handleAccordionClick} >
          <Typography variant='h5'>{Header}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List3Card ItemList={ItemList}/>
        </AccordionDetails>
      </Accordion>
 
 
    </div>
  );
}
export default Accordion1