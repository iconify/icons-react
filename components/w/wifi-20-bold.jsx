import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvj1k6p0o.css';
import '../../css/h/h5d_4v8si.css';
import '../../css/x/xsz5ie_ke.css';
import '../../css/f/f5h10_v-a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvj1k6p0o"/><path class="h5d_4v8si"/><path class="xsz5ie_ke"/><path class="f5h10_v-a"/>`,
		"fallback": "energy-icons:wifi-20-bold",
	});
}

export default Component;
