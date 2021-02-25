import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
/********Services********* */
import GlobalService from "../../Services/GlobalService";

/*******Styles*** */
import { Section, TableContainerCustom, PaginationCustom, Img } from "./styles";

class DashboardProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      numberPages: 1,
      page: 1,
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  handleChange(event, value) {
    this.setState({ page: value });
    this.getProducts(value);
  }

  getProducts(number = 1) {
    function createData(name, code, value, image_url) {
      return {
        name,
        code,
        value,
        image_url,
      };
    }
    GlobalService.getProducts(number)
      .then((response) => {
        this.setState({ row: response.data.data });

        this.setState({ rows: [] });
        let rowProducts = [];

        response.data.data.forEach((product) =>
          rowProducts.push(
            createData(
              product.name,
              product.code,
              product.value,
              product.image_url
            )
          )
        );
        this.setState({ rows: rowProducts });
        this.setState({ numberPages: response.data.meta.total_pages });
      })
      .catch((error) => {
        toastr.error("Ha ocurrido un error al intentar obtener los productos.");
      });
  }

  render() {
    const { rows, numberPages, page } = this.state;

    return (
      <Section>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <TableContainerCustom component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">Producto</TableCell>
                      <TableCell align="left">Código</TableCell>
                      <TableCell align="left">Valor</TableCell>
                      <TableCell align="left">Imagen</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell align="left">{row.code}</TableCell>
                        <TableCell align="left">{row.value} pesos</TableCell>
                        <TableCell align="left">
                          {row.image_url ? (
                            <Img src={row.image_url}></Img>
                          ) : (
                            "Sin imagen"
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainerCustom>
              <PaginationCustom
                count={5}
                page={1}
                color="primary"
                count={numberPages}
                page={page}
                onChange={(event, value) => this.handleChange(event, value)}
              />
            </Grid>
          </Grid>
        </Container>
      </Section>
    );
  }
}

export default DashboardProduct;
