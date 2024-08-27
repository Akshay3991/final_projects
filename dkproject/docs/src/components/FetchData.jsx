import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { servicesActions } from "../store/serviceSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

function FetchData() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchStatusActions.markFetchingStarted());
    fetch("http://localhost:8080/services", { signal })
      .then((res) => res.json())
      .then(({ services }) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(servicesActions.addInitialServices(services));
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);
  return <div></div>;
}

export default FetchData;
