import { Roles } from "./Roles";
interface Props {
  component: React.ComponentType;
  path?: string;
  roles: Array<Roles>;
}

export const PrivateRoute: React.FC<Props> = ({
  component: RouteComponent,
  roles,
}) => {

  return (
    <>
      <div style={{ maxWidth: "100.62%" }} className="row h-100">
        <div className="px-0 mx-0 h-100 col-md d-flex flex-column w-100">
          <div
            style={{
              padding: "40px 0px  0px  0px",
              display: "flex",
              borderRadius: "52px 0 0 0",
              flexDirection: "column",
              alignItems: "center",
              // justifyContent: "center",
              marginTop: 20,
              marginLeft: 269,
              width: "83.3%",
              height: "800%",
              backgroundColor: "white",
            }}
          >
            <RouteComponent />
          </div>
        </div>
      </div>
    </>
  );
}

