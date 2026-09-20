import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p_2ppobyl.css';
import '../../css/y/yepmwko9k.css';
import '../../css/w/wbh3yjdrr.css';
import '../../css/x/xzzb1ne8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p_2ppobyl"/><path class="yepmwko9k"/><path class="wbh3yjdrr"/><path class="xzzb1ne8n"/></g>`,
		"fallback": "keyline-icons:wifi-info-two-tone",
	});
}

export default Component;
