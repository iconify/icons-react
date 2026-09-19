import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp9i4h5xb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp9i4h5xb"/>`,
		"fallback": "cib:yandex",
	});
}

export default Component;
