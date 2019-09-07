import { configure } from 'enzyme';
import * as EnzymeAdapter from 'enzyme-adapter-react-16';
// @ts-ignore
configure({ adapter: new EnzymeAdapter() });