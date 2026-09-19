import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bk17zl5nv.css';
import '../../css/q/qjhu6dbua.css';
import '../../css/t/tz_5mvbtv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bk17zl5nv"/><path class="qjhu6dbua"/><path class="tz_5mvbtv"/>`,
		"fallback": "carbon:web-services-task-definition-version",
	});
}

export default Component;
