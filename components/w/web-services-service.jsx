import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/safs953tl.css';
import '../../css/l/lpb7-yq0f.css';
import '../../css/t/tz_5mvbtv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="safs953tl"/><path class="lpb7-yq0f"/><path class="tz_5mvbtv"/>`,
		"fallback": "carbon:web-services-service",
	});
}

export default Component;
