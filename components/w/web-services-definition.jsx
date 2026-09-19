import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bieq96bfh.css';
import '../../css/i/iyk4v5bbj.css';
import '../../css/t/tz_5mvbtv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bieq96bfh"/><path class="iyk4v5bbj"/><path class="tz_5mvbtv"/>`,
		"fallback": "carbon:web-services-definition",
	});
}

export default Component;
