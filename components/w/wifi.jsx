import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cya1rgi2m.css';
import '../../css/p/pzrl0qlzj.css';
import '../../css/m/mia-jjxeq.css';
import '../../css/f/fw7pardmj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="cya1rgi2m"/><path class="pzrl0qlzj"/><path class="mia-jjxeq"/><path class="fw7pardmj"/>`,
		"fallback": "carbon:wifi",
	});
}

export default Component;
