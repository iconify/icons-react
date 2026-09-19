import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jbcquhcbm.css';
import '../../css/m/md286fbip.css';
import '../../css/h/hjyf7p0pe.css';
import '../../css/u/ulnqukbhs.css';
import '../../css/m/mevz94bei.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="jbcquhcbm"/><g class="md286fbip"><path class="hjyf7p0pe"/><path class="ulnqukbhs"/><path class="mevz94bei"/></g></g>`,
		"fallback": "cryptocurrency-color:zest",
	});
}

export default Component;
