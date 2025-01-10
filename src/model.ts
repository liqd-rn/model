import React, { useState, useEffect } from 'react';

export default class AbstractModel
{
    private static instances = new Set<AbstractModel>();

    constructor()
    {
        AbstractModel.instances.add( this );
    }

    public destroy()
    {
        AbstractModel.instances.delete( this );
    }
}