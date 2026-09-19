import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekd6psbxc.css';
import '../../css/r/rlibiac-m.css';
import '../../css/f/frcwzgsyn.css';
import '../../css/r/rlr_7t-6a.css';
import '../../css/f/fe4pn81hx.css';
import '../../css/t/txx57lteu.css';
import '../../css/u/u6oef_sfr.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ekd6psbxc"/><path clip-rule="evenodd" class="rlibiac-m"/><path clip-rule="evenodd" class="frcwzgsyn"/><path clip-rule="evenodd" class="rlr_7t-6a"/><path clip-rule="evenodd" class="fe4pn81hx"/><path clip-rule="evenodd" class="txx57lteu"/><path clip-rule="evenodd" class="u6oef_sfr"/>`,
		"fallback": "devicon:wordpress",
	});
}

export default Component;
