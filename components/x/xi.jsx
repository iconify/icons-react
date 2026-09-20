import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx1jmtbvx.css';
import '../../css/g/gb3l1qqio.css';
import '../../css/y/yckuhjbgg.css';
import '../../css/z/zgo1v5hqs.css';
import '../../css/u/uxohpkbpo.css';
import '../../css/m/mbj_webcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx1jmtbvx"/><path class="gb3l1qqio"/><path class="yckuhjbgg"/><path class="zgo1v5hqs"/><path class="uxohpkbpo"/><path class="mbj_webcz"/>`,
		"fallback": "token:xi",
	});
}

export default Component;
