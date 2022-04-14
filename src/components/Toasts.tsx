const ToastMessage = (props: { msg: string; title: string }) => {
  return (
    <div className="h-100 mt-0 pt-0 text-start px-0 mx-0 d-flex flex-column">
      <span style={{ fontSize: "15px", fontWeight: "bold" }}>
        {props.title}
      </span>
      <span style={{ fontSize: "16px" }}>{props.msg}</span>
    </div>
  );
};
export default ToastMessage;
