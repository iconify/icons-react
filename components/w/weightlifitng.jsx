import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqq4spbzl.css';
import '../../css/e/ej3ft6qzs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="pqq4spbzl"/><path class="ej3ft6qzs"/>`,
		"fallback": "cil:weightlifitng",
	});
}

export default Component;
