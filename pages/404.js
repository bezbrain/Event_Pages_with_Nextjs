import ErrorAlert from "@/components/ui/error-alert";
import { Fragment } from "react";
import Button from "@/components/ui/button";

const GeneralError = () => {
  return (
    <Fragment>
      <ErrorAlert>
        <p>Page is Not Found</p>
      </ErrorAlert>
      <div className="center">
        <Button link="/">Back To Home</Button>
      </div>
    </Fragment>
  );
};

export default GeneralError;
