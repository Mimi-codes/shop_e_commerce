 //in material ui, the file extension is '.js' and not '.css'
//the style names are in camelCase and not separated by a '-'
//the style properties are to be in quotes .i.e ('') and separated by a dash '-' if it's double words .i.e 'flex-end'

import { makeStyles } from '@material-ui/core/styles';

 export default makeStyles(() => ({
root: {
    maxWidth: '100%'
},
media: {
    height: 0,
    paddingTop: '56.25%', //16:9
}, cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
},
cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
},
 }))