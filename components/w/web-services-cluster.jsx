import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arbh2nbmk.css';
import '../../css/t/tz_5mvbtv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arbh2nbmk"/><path class="tz_5mvbtv"/>`,
		"fallback": "carbon:web-services-cluster",
	});
}

export default Component;
