import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo30i31yi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zo30i31yi"/>`,
		"fallback": "mynaui:zap-off-solid",
	});
}

export default Component;
