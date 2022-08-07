import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../store/form-slice";
const useValdtion = (type) => {
  const dispatch = useDispatch();
  const myInputs = useSelector((state) => state.form);

  if (type === "Your Name") {
    const changeNameHandler = (e) => {
      dispatch(
        formActions.changeInput({ value: e.target.value, input: "name" })
      );
    };
    const blurNameHandler = () => {
      dispatch(
        formActions.changeInputtoutch({ value: true, input: "nameToutch" })
      );
    };

    const valdtionMessge = <p>name must not be empty</p>;
    return [
      changeNameHandler,
      blurNameHandler,
      myInputs.name,
      myInputs.nameToutch,
      valdtionMessge,
    ];
  }

  if (type === "Street") {
    const changeStreetHandler = (e) => {
      dispatch(
        formActions.changeInput({ value: e.target.value, input: "street" })
      );
    };
    const blurStreetHandler = () => {
      dispatch(
        formActions.changeInputtoutch({ value: true, input: "streetToutch" })
      );
    };
    const valdtionMessge = <p>street must not be empty</p>;
    return [
      changeStreetHandler,
      blurStreetHandler,
      myInputs.street,
      myInputs.streetToutch,
      valdtionMessge,
    ];
  }
  if (type === "Postal Code") {
    const changePostalHandler = (e) => {
      dispatch(
        formActions.changeInput({ value: e.target.value, input: "postal" })
      );
    };
    const blurPostalHandler = () => {
      dispatch(
        formActions.changeInputtoutch({ value: true, input: "postalToutch" })
      );
    };
    let valdtionMessge;
    if (myInputs.postal.trim() === "") {
      valdtionMessge = <p>postal must not be empity</p>;
    } else if (isNaN(+myInputs.postal)) {
      valdtionMessge = <p>postal must be a number</p>;
    } else {
      valdtionMessge = <p>postal must be 4 chracter</p>;
    }
    return [
      changePostalHandler,
      blurPostalHandler,
      myInputs.postal,
      myInputs.postalToutch,
      valdtionMessge,
    ];
  }
  if (type === "City") {
    const changeCityHandler = (e) => {
      dispatch(
        formActions.changeInput({ value: e.target.value, input: "city" })
      );
    };
    const blurCityHandler = () => {
      dispatch(
        formActions.changeInputtoutch({ value: true, input: "cityToutch" })
      );
    };
    const valdtionMessge = <p>city must not be empty</p>;
    return [
      changeCityHandler,
      blurCityHandler,
      myInputs.city,
      myInputs.cityToutch,
      valdtionMessge,
    ];
  }
};

export default useValdtion;
