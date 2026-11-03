import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8a4m0b2a.css';
import '../../css/h/hjzkjwhbs.css';
import '../../css/p/poazbeb6d.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8a4m0b2a"/><path class="hjzkjwhbs"/><path class="poazbeb6d"/>`,
		"fallback": "devicon:xampp",
	});
}

export default Component;
