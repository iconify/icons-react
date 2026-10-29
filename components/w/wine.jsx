import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bm_sfu09j.css';
import '../../css/t/ti95e2suf.css';
import '../../css/r/rkysbabwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bm_sfu09j"/><path class="ti95e2suf"/><path class="rkysbabwr"/>`,
		"fallback": "withicons-bauhaus:wine",
	});
}

export default Component;
