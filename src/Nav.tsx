import { Grid } from "@mui/material";
import { styled } from "@mui/system";

const NavContainer = styled("nav")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(2),
  marginBottom: theme.spacing(4),
  borderRadius: theme.spacing(1),
  boxShadow: theme.shadows[2],
  color: theme.palette.primary.contrastText,
}));

const Title = styled("h1")({
  margin: 0,
  fontSize: "2rem",
  fontWeight: "bold",
  textAlign: "center",
  textTransform: "uppercase",
});

const LinkList = styled("ul")({
  listStyleType: "none",
  padding: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const LinkItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0, 2),
}));

const Link = styled("a")(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.primary.contrastText,
  fontSize: "1rem",
  fontWeight: "bold",
  transition: "color 0.3s ease",
  "&:hover": {
    color: theme.palette.secondary.main,
  },
}));

const Nav = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={10} lg={8}>
        <NavContainer>
          <Title>Dashboard</Title>
          <LinkList>
            <LinkItem>
              <Link href="#general-info">Información General</Link>
            </LinkItem>
            <LinkItem>
              <Link href="#weather-forecast">Pronóstico de la semana</Link>
            </LinkItem>
            <LinkItem>
              <Link href="#climate-trends">Tendencias Climáticas</Link>
            </LinkItem>
            <LinkItem>
              <Link href="#detailed-forecast">Pronósticos Detallados</Link>
            </LinkItem>
          </LinkList>
        </NavContainer>
      </Grid>
    </Grid>
  );
};

export default Nav;
