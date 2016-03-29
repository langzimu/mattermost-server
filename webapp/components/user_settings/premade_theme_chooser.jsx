// Copyright (c) 2015 Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import $ from 'jquery';
import * as Utils from 'utils/utils.jsx';
import Constants from 'utils/constants.jsx';

import React from 'react';

import {FormattedMessage} from 'react-intl';

export default class PremadeThemeChooser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const theme = this.props.theme;

        const premadeThemes = [];
        for (const k in Constants.THEMES) {
            if (Constants.THEMES.hasOwnProperty(k)) {
                const premadeTheme = $.extend(true, {}, Constants.THEMES[k]);

                let activeClass = '';
                if (premadeTheme.type === theme.type) {
                    activeClass = 'active';
                }

                premadeThemes.push(
                    <div
                        className='col-xs-6 col-sm-3 premade-themes'
                        key={'premade-theme-key' + k}
                    >
                        <div
                            className={activeClass}
                            onClick={() => this.props.updateTheme(premadeTheme)}
                        >
                            <label>
                                <img
                                    className='img-responsive'
                                    src={premadeTheme.image}
                                />
                                <div className='theme-label'>{Utils.toTitleCase(premadeTheme.type)}</div>
                            </label>
                        </div>
                    </div>
                );
            }
        }

        return (
            <div className='row appearance-section'>
                {premadeThemes}
                <div className='col-sm-12 padding-bottom x2'>
                    <a
                        href='http://docs.mattermost.com/help/settings/theme-colors.html#custom-themes'
                        target='_blank'
                    >
                        <FormattedMessage
                            id='user.settings.display.theme.otherThemes'
                            defaultMessage='See other themes'
                        />
                    </a>
                </div>
            </div>
        );
    }
}

PremadeThemeChooser.propTypes = {
    theme: React.PropTypes.object.isRequired,
    updateTheme: React.PropTypes.func.isRequired
};
