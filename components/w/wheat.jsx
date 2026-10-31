import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/q/q4phd7b2w.css';
import '../../css/q/qhjxo70-o.css';
import '../../css/h/hzk5eacet.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="q4phd7b2w"/><path class="qhjxo70-o wm-k"/><path class="hzk5eacet wm-a"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:wheat",
	});
}

export default Component;
