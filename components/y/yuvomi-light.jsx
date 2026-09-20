import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_6jlnb7u.css';
import '../../css/i/i66y37nvy.css';
import '../../css/u/usf_wsn7b.css';
import '../../css/a/a2ox3_bfp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_6jlnb7u"/><circle class="i66y37nvy"/><circle class="usf_wsn7b"/><circle class="a2ox3_bfp"/>`,
		"fallback": "selfhst:yuvomi-light",
	});
}

export default Component;
