import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpdq4hb-m.css';
import '../../css/l/l0r8j72es.css';
import '../../css/m/m40vt8b2k.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGX6GfSdon"><g class="lpdq4hb-m"><path class="l0r8j72es"/><path class="m40vt8b2k"/></g></mask></defs><path mask="url(#SVGX6GfSdon)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:xigua",
	});
}

export default Component;
