<Slide timeout={2500} in={true} direction="up">
  <Grid
    container
    className={classes.buttonContainer}
    spacing={2}
    alignItems="center"
    justify="center"
    direction="row"
    style={{ margingTop: "20px" }}
  >
    {/* Button English */}

    <Grid
      className={classes.butonLang}
      item
      xs={3}
      md={1}
      onClick={() => this.openHomePage("English")}
    >
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        elevation={5}
        className={[classes.bottomItemButton]}
      >
        <Typography className={classes.btnText}>
          {mobSize == false ? "English" : "En"}
        </Typography>
      </Grid>
    </Grid>

    {/* Button sinhala */}

    <Grid
      className={classes.butonLang}
      item
      xs={3}
      md={1}
      onClick={() => this.openHomePage("Sinhala")}
    >
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        elevation={5}
        className={[classes.bottomItemButton]}
      >
        <Typography className={classes.btnText}>
          {" "}
          {mobSize == false ? "සිංහල" : "සිං"}
        </Typography>
      </Grid>
    </Grid>
    {/* Button tamil */}
    <Grid
      className={classes.butonLang}
      item
      xs={3}
      md={1}
      onClick={() => this.openHomePage("Tamil")}
    >
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        elevation={5}
        className={[classes.bottomItemButton]}
      >
        <Typography className={classes.btnText}>
          {" "}
          {mobSize == false ? "தமிழ்" : "த"}
        </Typography>
      </Grid>
    </Grid>
  </Grid>
</Slide>
