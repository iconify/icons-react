import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v3jqt_b0q.css';
import '../../css/x/xof128b9m.css';
import '../../css/l/lgg-pmbrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v3jqt_b0q"/><path class="xof128b9m"/><path class="lgg-pmbrt"/></g>`,
		"fallback": "streamline-ultimate:wifi-signal-4",
	});
}

export default Component;
