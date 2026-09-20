import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kv_3wkq1r.css';
import '../../css/w/wisf880rp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kv_3wkq1r"/><path class="wisf880rp"/>`,
		"fallback": "selfhst:zerotier",
	});
}

export default Component;
