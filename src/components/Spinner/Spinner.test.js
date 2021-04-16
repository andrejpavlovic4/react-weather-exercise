import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Spinner from './Spinner';
import CircularProgress from '@material-ui/core/CircularProgress';

configure({ adapter: new Adapter() });

describe("<Spinner />", () => {
  it("should render one <CircularProgress /> component", () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper.find(CircularProgress)).toHaveLength(1);
  });
});
