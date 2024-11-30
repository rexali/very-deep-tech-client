
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import "./styles/styles.css";
import Link from 'next/link';
import Button from '@mui/material/Button';
export default function ProductCategories(props: any) {

  if (props.home === 'home') {
    return (
      <div>
        <h2 style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
          <span>Categories</span>
          <Link style={{ textDecoration: "none", color: 'blue' }} href={"/products"}><Button>See all</Button></Link>
        </h2>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ mt: 5 }}>
          {props.categories?.map((category: string, i: number) => {
            return (<Grid key={i} item xs={4} md={6}>
              <Card sx={{ backgroundColor: 'darkorange', color: 'white', width: 100, height: 100, textAlign: 'center', alignSelf: 'center', alignItems: 'center' }}>
                <CardContent>
                  <Link style={{ textDecoration: 'none' }} href={`/category/?term=${category}`}>
                    <Button>
                      {category.toUpperCase()}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
            )
          })}
        </Grid>
      </div>)
  }

  return (
    <div className="scrollmenu">
      <a href="#categories">Categories:</a>
      {
        props.categories?.map((category: string, i: number) =>
          <a key={i} href={`/category/?term=${category}`}>
            {category}
          </a>)
      }
    </div>
  )
}
