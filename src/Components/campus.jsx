import { OutTable, ExcelRenderer } from "react-excel-renderer";

const fileHandler = (event) => {
  let fileObj = event.target.files[0];

  //just pass the fileObj as parameter
  ExcelRenderer(fileObj, (err, resp) => {
    if (err) {
      console.log(err);
    } else {
      this.setState({
        cols: resp.cols,
        rows: resp.rows,
      });
    }
  });
};

function campus() {
  return (
    <div>
      <input
        type="file"
        onChange={this.fileHandler.bind(this)}
        style={{ padding: "10px" }}
      />
    </div>
  );
}
export default campus;
