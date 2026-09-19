import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkldj8bfo.css';
import '../../css/j/jiyjv684p.css';
import '../../css/t/tz_5mvbtv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkldj8bfo"/><path class="jiyjv684p"/><path class="tz_5mvbtv"/>`,
		"fallback": "carbon:web-services-task",
	});
}

export default Component;
