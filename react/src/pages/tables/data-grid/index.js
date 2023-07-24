// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'

// ** Demo Components Imports
import TableBasic from 'src/views/table/data-grid/TableBasic'
import TableFilter from 'src/views/table/data-grid/TableFilter'
import TableColumns from 'src/views/table/data-grid/TableColumns'
import TableEditable from 'src/views/table/data-grid/TableEditable'
import TableBasicSort from 'src/views/table/data-grid/TableBasicSort'
import TableSelection from 'src/views/table/data-grid/TableSelection'
import TableServerSide from 'src/views/table/data-grid/TableServerSide'
import RechartsLineChart from "../../../views/charts/recharts/RechartsLineChart";
import {useSettings} from "../../../@core/hooks/useSettings";
import RechartsScatterChart from "../../../views/charts/recharts/RechartsScatterChart";
import RechartsAreaChart from "../../../views/charts/recharts/RechartsAreaChart";

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const DataGrid = () => {
  // ** Hooks
  const { settings } = useSettings()
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <RechartsAreaChart direction={settings.direction} />
      </Grid>
      <Grid item xs={12}>
        <TableFilter />
      </Grid>
    </Grid>
  )
}

export default DataGrid
