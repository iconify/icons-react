import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cya1rgi2m.css';
import '../../css/s/s7ta3byys.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="cya1rgi2m"/><path class="s7ta3byys"/>`,
		"fallback": "carbon:wifi-off",
	});
}

export default Component;
