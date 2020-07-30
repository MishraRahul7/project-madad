<div className={classes.selectDiv}>
  <select
    name="status"
    value={values.status}
    onChange={handleChange}
    onBlur={handleBlur}
    style={{ display: "block", border: "1px solid black" }}
    className={classes.options}
  >
    <option value="" label="Select a status" className={classes.options} />
    <option value="Active" label="Active" className={classes.options} />
    <option value="Inactive" label="Inactive" className={classes.options} />
  </select>
</div>;
{
  errors.status && touched.status && (
    <div className={classes.errorMessage}>{errors.status}</div>
  );
}
