import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"content content"`,
        lg: `"aside content"`,
      }}
    >
      <GridItem area="#f2f2f2">
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <GridItem area="main" bg="dodgerblue">
          Main
        </GridItem>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
    </Grid>
  );
}
export default App;
