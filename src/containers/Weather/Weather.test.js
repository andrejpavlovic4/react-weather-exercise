import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Weather } from './Weather';
import Heading from '../../components/Heading/Heading';
import Spinner from '../../components/Spinner/Spinner';
import TemperatureControl from '../../components/TemperatureControl/TemperatureControl';
import CardSlider from '../../components/CardSlider/CardSlider';

configure({ adapter: new Adapter() });

describe("<Weather />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Weather onInitWeatherInformation={() => {}}/>);
  });

  it("should render the <Spinner /> component if fetching data",  () => {
    wrapper.setProps({ loading: true });
    expect(wrapper.find(Spinner)).toHaveLength(1);
  });

  it("should render the whole Application data fetched correctly",  () => {
    wrapper.setProps({ loading: false });
    expect(wrapper.find(Heading)).toHaveLength(1);
    expect(wrapper.find(TemperatureControl)).toHaveLength(1);
    expect(wrapper.find(CardSlider)).toHaveLength(1);
  });

});
