import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iycln-b8i.css';
import '../../css/g/g4i_lk0zb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="iycln-b8i"/><path class="g4i_lk0zb"/>`,
		"fallback": "selfhst:yamlresume",
	});
}

export default Component;
